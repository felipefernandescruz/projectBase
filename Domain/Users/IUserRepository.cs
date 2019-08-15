using System.Collections.Generic;
using Infrastructure.Repository;

namespace Domain.Users
{
    public interface IUserRepository : IRepositoryBase<User>
    {
        User GetByEmail(string email);
        List<User> ListByEmail(string email);
        User GetByResetPasswordToken(string token);
        List<User> ListNotDeleted();
    }
}