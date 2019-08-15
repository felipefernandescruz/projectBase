using System;
using Infrastructure.Extensions;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Infrastructure.Base
{
    public class BaseEntity : IBaseEntity
    {

        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("CreatedAt")]
        [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        public DateTime? CreatedAt { get; set; }

        [BsonElement("UpdatedAt")]
        [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
        public DateTime? UpdatedAt { get; set; }

        [BsonElement("DeletedAt")]
        [BsonDateTimeOptions(Kind = DateTimeKind.Local)]
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

        protected void ChangeCreatedAt(DateTime createdAt)
        {
            CreatedAt = createdAt;
        }

        protected void ChangeUpdatedAt(DateTime? updatedAt)
        {
            UpdatedAt = updatedAt;
        }


    }
}