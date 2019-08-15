using System;
namespace Infrastructure.Base
{
    public interface IBaseEntity
    {
        void MarkAsDeleted();
        void MarkAsUpdated();
    }
}
