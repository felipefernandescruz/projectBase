using System;
using System.Collections.Generic;
using System.Linq;
using Domain.Base;
using Domain.Exceptions;
using Domain.Shared.Enum;
using Domain.Users.Models;
using Infrastructure.Managers;
using System.Text;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;

namespace Domain.Users
{
    public class UserService : ServiceBase<IUserRepository, User>, IUserService
    {
        public UserService() : base(new UserRepository())
        {
        }

        public void Create(string name, string lastName, string email, string password, DateTime? dateOfBirth, GenderEnum? gender, PronounEnum? pronoun, string customGender)
        {
            var emailVerification = Repository.ListByEmail(email);
            if(emailVerification.Count != 0)
            {
                throw new DomainException("Usuário já cadastrado. Tente novamente");
            }
                
            var user = new User(name, lastName, email, dateOfBirth, gender, pronoun, customGender);
            user.ChangeTokenGenerate();
            SendCreatePasswordEmail(user.Email, user.Name, user.TokenGenerate);

            Repository.Add(user);
        }

        protected void SendCreatePasswordEmail(string email, string name, string token)
        {
            var bodyEmail = new StringBuilder();
            bodyEmail.AppendLine(string.Format("Olá, {0}.<br><br>", name));

            bodyEmail.AppendLine("Segue abaixo o <b>CÓDIGO DE ACESSO </b>para você cadastrar uma senha de acesso ao sistema BaseProject - FFcompany. <br><br>");

            bodyEmail.AppendLine(string.Format("<b><h1>{0}</h1></b> <br><br>", token));

            bodyEmail.AppendLine(string.Format("Qualquer dúvida, entre em contato com o(a) Administrador(a) ou o(a) responsável. <br><br>"));
            bodyEmail.AppendLine(string.Format("<b>OBS: ESTE EMAIL É ENVIADO AUTOMACTICAMENTE, FAVOR NÃO RESPONDER</b>"));

            EmailManager.SendEmail(email, null, "Cadastrar Senha", bodyEmail.ToString(), true);
        }

        public void Delete(string id)
        {
            throw new NotImplementedException();
        }

        public UserModel GetById(string id)
        {
            return Repository.GetByKey(id).ToModel();
        }

        public List<UserModel> List()
        {
            return Repository.ListAll().Select(item => item.ToModel())
                .OrderBy(item => item.name)
                .ToList();
        }

        public void Update(string id, string name, string lastName, string email, DateTime? dateOfBirth, GenderEnum? gender, PronounEnum? pronoun, string customGender)
        {
            validateEmail(email, id);

            var user = GetExistingUser(id);

            user.ChangeName(name);
            user.ChangeLastName(lastName);
            user.ChangeDateOfBirth(dateOfBirth);
            user.ChangeGender(gender);
            user.MarkAsUpdated();

            Repository.Update(id,user);
        }

        private void validateEmail(string email, string userId)
        {
            var user = Repository.ListByEmail(email);
            if (user.Any(item => item.Id != userId))
                throw new DomainException(string.Format("Erro ao validar conta de acesso para o(a) {0}. Usuário de acesso já existe no sistema. Altere o usuário de acesso e tente novamente.", email));
        }

        private User GetExistingUser(string id)
        {
            var user = GetByKey(id);

            if (user == null)
                throw new DomainException("Usuário não encontrado. Tente novamente");

            return user;
        }

        private User GetByKey(string id)
        {
            return Repository.GetByKey(id);
        }

        public void UpdatePassword(string email, string token, string password, string confirmPassword)
        {
            if (password != confirmPassword)
                throw new DomainException("As senhas informadas não são iguais. Tente novamente");

            var user = Repository.GetByEmail(email);           

            if (user == null)
                throw new DomainException("Usuário não existe. Tente novamente");

            user.ValidateUpdatePasswordToken(token, user);

            user.ChangePassword(password);
            user.ClearTokenGenerate();
            user.MarkAsUpdated();

            Repository.Update(user.Id, user);
        }

        public void GenerateNewToken(string email)
        {
            var user = Repository.GetByEmail(email);
            if(user == null)
                throw new DomainException("Usuário não existe. Tente novamente");

            user.ChangeTokenGenerate();
            Repository.Update(user.Id, user);

            SendCreatePasswordEmail(user.Email, user.Name, user.TokenGenerate);
           
        }

        public string Login(string email, string password)
        {
            var user = Repository.GetByEmail(email);

            if (user == null || !user.HasPassword() || !user.ValidatePassword(password))
                throw new DomainException("Login e/ou senha inválidos. Tente novamente.", System.Net.HttpStatusCode.Unauthorized);

            if (user.DeletedAt != null)
                throw new DomainException("Usuário excluído do sistema. Entre em contato com o(a) Administrador(a) ou o(a) responsável.", System.Net.HttpStatusCode.Unauthorized);

            return CreateJwtToken(user.Id, user.Email, user.Name);
        }

        private string CreateJwtToken(string userId, string email, string name)
        {

            byte[] key = Convert.FromBase64String(ConfigManager.JwtSecret);
            SymmetricSecurityKey securityKey = new SymmetricSecurityKey(key);
            var signingCredentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256Signature);

            var payload = new JwtPayload(null, "", new List<Claim>(), null, null)
            {
                { "loggedUser", new { userId, email, name } }
            };

            var jwtToken = new JwtSecurityToken(new JwtHeader(signingCredentials), payload);
            var jwtTokenHandler = new JwtSecurityTokenHandler();
            return jwtTokenHandler.WriteToken(jwtToken);
        }
    }
}
