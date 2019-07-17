using System;
namespace Domain.Base
{
    public interface IBaseEntity
    {
        void MarkAsDeleted();
        void MarkAsUpdated();
    }
}
