using System;
namespace Domain.Base
{
    public interface IBaseEntity
    {
        void MarkAsDeleted();
        void MarkAsUpdated();
        void ChangeCreatedAt(DateTime createdAt);
        void ChangeUpdatedAt(DateTime? updatedAt);
    }
}
