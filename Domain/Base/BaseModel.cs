using System;
namespace Domain.Base
{
    public class BaseModel
    {
        public string id { get; set; }
        public DateTime? createdAt { get; set; }
        public DateTime? updatedAt { get; set; }
        public DateTime? deletedAt { get; set; }
    }
}
