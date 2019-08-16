using System;
using Domain.Exceptions;
using Domain.Shared.Enum;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Infrastructure.Extensions;
using Infrastructure.Base;

namespace Domain.Users
{
    public class User : BaseEntity
    {
        public User(): base()
        {
        }

        internal User(string name, string lastName, string email, DateTime? dateOfBirth, GenderEnum? gender,PronounEnum? pronoun, string customGender)
        {
            ChangeName(name);
            ChangeLastName(lastName);
            ChangeEmail(email);
            ChangeDateOfBirth(dateOfBirth);
            ChangeGender(gender);
            ChangePronoun(pronoun);
            ChangeCustomGender(customGender);
            ChangeStatus(StatusEnum.Pending);
        }


        [BsonElement("Name")]
        internal string Name { get; private set; }

        [BsonElement("LastName")]
        internal string LastName { get; private set; }

        [BsonElement("Email")]
        internal string Email { get; private set; }

        [BsonElement("Password")]
        internal string Password { get; private set; }

        [BsonElement("DateOfBirth")]
        internal DateTime? DateOfBirth { get; private set; }

        [BsonElement("Gender")]
        internal GenderEnum? Gender { get; private set; }

        [BsonElement("Pronoun")]
        internal PronounEnum? Pronoun { get; private set; }

        [BsonElement("CustomGender")]
        internal string CustomGender { get; private set; }

        [BsonElement("TokenGenerate")]
        internal string TokenGenerate { get; private set; }

        [BsonElement("TokenGenerateDate")]
        [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        internal DateTime? TokenGenerateDate { get; private set; }

        [BsonElement("Status")]
        internal StatusEnum? Status { get; private set; }


        internal void ChangeName(string name)
        {
            if (string.IsNullOrEmpty(name))
                throw new DomainException("O nome do usuário é obrigatório.");

            Name = name;
        }

        internal void ChangeLastName(string lastName)
        {
            if (string.IsNullOrEmpty(lastName))
                throw new DomainException("O sobrenome do usuário é obrigatório.");

            LastName = lastName;
        }

        internal void ChangeEmail(string email)
        {
            if (string.IsNullOrEmpty(email))
                throw new DomainException("O email do usuário é obrigatório.");

            Email = email;
        }

        internal void ChangePassword(string password)
        {
            if (string.IsNullOrEmpty(password))
                throw new DomainException("A senha do usuário é obrigatória.");

            Password = password.GenerateHash();
        }

        internal void ChangeDateOfBirth(DateTime? dateOfBirth)
        {
            DateOfBirth = dateOfBirth;
        }

        internal void ChangeGender(GenderEnum? gender)
        {
            Gender = gender;

        }

        internal void ChangePronoun(PronounEnum? pronoun)
        {
            Pronoun = pronoun;

        }

        internal void ChangeCustomGender(string customGender)
        {
            CustomGender = customGender;

        }

        internal void ChangeTokenGenerate()
        {
            TokenGenerate = Guid.NewGuid().ToString().Substring(0,7).ToUpper();

            ChangeTokenGenerateDate();
        }

        private void ChangeTokenGenerateDate()
        {
            TokenGenerateDate = DateTime.Now.BrazilTimeZone();
        }



        internal void ClearTokenGenerate()
        {

            TokenGenerate = null;
            TokenGenerateDate = null;
        }

        protected void ChangeStatus(StatusEnum? status)
        {
            Status = status;
        }

        internal void ValidateUpdatePasswordToken(string token, User user)
        {
            var today = DateTime.Now.BrazilTimeZone();
            var diffTime = today.Subtract(user.TokenGenerateDate.Value);
            if (token != user.TokenGenerate || diffTime.Minutes >= 10)
                throw new DomainException("Token invalido. Tente novamente");

            ChangeStatus(StatusEnum.Authenticated);
        }

        internal bool HasPassword()
        {
            return !string.IsNullOrEmpty(Password);
        }

        internal bool ValidatePassword(string password)
        {
            return Password.ValidateHash(password);
        }

    }
}
