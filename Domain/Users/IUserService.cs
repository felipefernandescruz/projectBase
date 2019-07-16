using System;
using System.Collections.Generic;
using Domain.Shared.Enum;
using Domain.Users.Models;

namespace Domain.Users
{
    public interface IUserService
    {
        List<UserModel> List();
        UserModel GetById(string id);
        void Create(string name, string lastName, string email, string password, DateTime? dateOfBirth, GenderEnum? gender);
        void Update(string id, string name, string lastName, string email, DateTime? dateOfBirth, GenderEnum? gender);
        void Delete(string id);
    }
}
