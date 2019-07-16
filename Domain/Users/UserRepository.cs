using System;
using System.Collections.Generic;
using Infrasctructure.Repository;
using MongoDB.Driver;

namespace Domain.Users
{
    public class UserRepository : RepositoryBase<User>, IUserRepository
    {
        public UserRepository():base("Users")
        {

        }

        public User GetByEmail(string email)
        {
           return Store().Find<User>(item => item.Email == email).FirstOrDefault();
        }

        public User GetByResetPasswordToken(string token)
        {
            throw new NotImplementedException();
        }

        public List<User> ListByEmail(string email)
        {
            return Store().Find<User>(item => item.Email == email).ToList();
        }

        public List<User> ListNotDeleted()
        {
           return Store().Find<User>(item => item.DeletedAt != null).ToList();
        }
    }
}
