using System;
using Domain.Base;
using Domain.Exceptions;
using Domain.Shared.Enum;
using Infrasctructure.Extensions;

namespace Domain.Users
{
    public class User : BaseEntity
    {
        public User(): base()
        {
        }

        internal User(string name, string lastName, string email, string password, DateTime? dateOfBirth, GenderEnum? gender)
        {
            ChangeName(name);
            ChangeLastName(lastName);
            ChangeEmail(email);
            ChangePassword(password);
            ChangeDateOfBirth(dateOfBirth);
            ChangeGender(gender);
        }

        internal string Name { get; private set; }

        internal string LastName { get; private set; }

        internal string Email { get; private set; }

        internal string Password { get; private set; }

        internal DateTime? DateOfBirth { get; private set; }

        internal GenderEnum? Gender { get; private set; }


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
    }
}
