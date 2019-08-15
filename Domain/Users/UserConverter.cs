using System.Collections.Generic;
using Domain.Users.Models;

namespace Domain.Users
{
    internal static class UserConverter
    {
        internal static UserModel ToModel(this User entity, List<string> embed = null)
        {
            var viewModel = new UserModel()
            {
                id = entity.Id,
                createdAt = entity.CreatedAt,
                updatedAt = entity.UpdatedAt,
                deletedAt = entity.DeletedAt,
                name = entity.Name,
                lastName = entity.LastName,
                email = entity.Email,
                dateOfBirth = entity.DateOfBirth,
                gender = entity.Gender,
                pronoun = entity.Pronoun
            };

            return viewModel;
        }
    }
}
