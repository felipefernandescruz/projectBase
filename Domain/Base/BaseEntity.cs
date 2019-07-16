using System;
using Infrasctructure.Extensions;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Domain.Base
{
    public class BaseEntity : IBaseEntity
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        public DateTime? CreatedAt { get; set; }

        public DateTime? UpdatedAt { get; set; }

        public DateTime? DeletedAt { get; set; }

        public BaseEntity()
        {
            CreatedAt = DateTime.Now.BrazilTimeZone();
        }

        public void MarkAsDeleted()
        {
            DeletedAt = DateTime.Now.BrazilTimeZone();
        }

        public void MarkAsUpdated()
        {
            UpdatedAt = DateTime.Now.BrazilTimeZone();
        }

        public void ChangeCreatedAt(DateTime createdAt)
        {
            CreatedAt = createdAt;
        }

        public void ChangeUpdatedAt(DateTime? updatedAt)
        {
            UpdatedAt = updatedAt;
        }
    }
}