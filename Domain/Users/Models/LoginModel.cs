using System;
using Domain.Base;
using Domain.Shared.Enum;

namespace Domain.Users.Models
{
    public class LoginModel
    {
        public string email { get; set; }
        public string password { get; set; }
    }
}
