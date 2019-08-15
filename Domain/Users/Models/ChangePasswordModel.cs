using System;
using Domain.Base;
using Domain.Shared.Enum;

namespace Domain.Users.Models
{
    public class ChangePasswordModel
    {
        public string email { get; set; }
        public string token { get; set; }
        public string password { get; set; }
        public string confirmPassword { get; set; }

    }
}
