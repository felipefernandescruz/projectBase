using System;
using System.Collections.Generic;
using Domain.Shared.Enum;
using Domain.Users;
using Domain.Users.Models;
using Microsoft.AspNetCore.Mvc;
using Web.Interfaces;

namespace Web.Controllers
{
    [Route("api/user")]
    [ApiController]
    public class UserController : BaseController<IUserService>, IBaseController
    {
        public UserController(UserService userService) : base(new UserService())
        {
        }

        [HttpGet]
        public List<UserModel> Get()
        {
            return Service.List();
        }

        [HttpPost]
        public void Create([FromBody] UserModel model)
        {
            Service.Create(model.name, model.lastName, model.email, model.password, model.dateOfBirth, model.gender,model.pronoum,model.customGender);
        }

        [HttpPut]
        public void Update([FromBody] UserModel model)
        {
            Service.Update(model.id, model.name, model.lastName, model.email, model.dateOfBirth, model.gender,model.pronoum,model.customGender);
        }

        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            Service.Delete(id);
        }
    }
}
