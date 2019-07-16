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
            var date = new DateTime();
            Service.Create("Teste", "Teste", "teste@teste.com", "123456", date, GenderEnum.Female);
           // Service.Update("5d2146a6c73a4b19f46cb145", "TesteUp", "TesteUp", "teste@teste.com", date, GenderEnum.Female);
            return Service.List();
        }

        [HttpPost]
        public void Create([FromBody] UserModel model)
        {
            Service.Create(model.name, model.lastName, model.email, model.password, model.dateOfBirth, model.gender);
        }

        [HttpPut]
        public void Update([FromBody] UserModel model)
        {
            Service.Update(model.id, model.name, model.lastName, model.email, model.dateOfBirth, model.gender);
        }

        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            Service.Delete(id);
        }
    }
}
