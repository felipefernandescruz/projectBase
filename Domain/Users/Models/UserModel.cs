using System;
using Domain.Base;
using Domain.Shared.Enum;

namespace Domain.Users.Models
{
    public class UserModel : BaseModel
    {
        public string name { get; set; }
        public string lastName { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public DateTime? dateOfBirth { get; set; }
        public GenderEnum? gender { get; set; }
        public PronounEnum? pronoum { get; set; }
        public string customGender { get; set; }
    }
}
