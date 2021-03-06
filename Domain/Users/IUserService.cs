﻿using System;
using System.Collections.Generic;
using Domain.Shared.Enum;
using Domain.Users.Models;

namespace Domain.Users
{
    public interface IUserService
    {
        List<UserModel> List();
        UserModel GetById(string id);
        void Create(string name, string lastName, string email, string password, DateTime? dateOfBirth, GenderEnum? gender, PronounEnum? pronoun, string customGender);
        void Update(string id, string name, string lastName, string email, DateTime? dateOfBirth, GenderEnum? gender, PronounEnum? pronoun, string customGender);
        void Delete(string id);
        void UpdatePassword(string email, string token, string password, string confirmPassword);
        void GenerateNewToken(string email);
        string Login(string email, string password);
    }
}
