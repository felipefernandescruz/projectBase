using System;
using System.Collections.Generic;
using System.Linq;
using Domain.Base;
using Domain.Exceptions;
using Domain.Shared.Enum;
using Domain.Users.Models;

namespace Domain.Users
{
    public class UserService : ServiceBase<IUserRepository, User>, IUserService
    {
        public UserService() : base(new UserRepository())
        {
        }

        public void Create(string name, string lastName, string email, string password, DateTime? dateOfBirth, GenderEnum? gender)
        {
            var user = new User(name, lastName, email, password, dateOfBirth, gender);

            Repository.Add(user);
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

        public void Update(string id, string name, string lastName, string email, DateTime? dateOfBirth, GenderEnum? gender)
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
    }
}
