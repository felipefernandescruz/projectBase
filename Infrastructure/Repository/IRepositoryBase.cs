using System;
using System.Collections.Generic;
using MongoDB.Driver;

namespace Infrastructure.Repository
{
    public interface IRepositoryBase<TEntityData>
    {
        void Add(TEntityData entityData);
        void DeleteByKey(string id);
        TEntityData GetByKey(string id);
        List<TEntityData> ListAll();
        IMongoCollection<TEntityData> Store();
        void Update(string id,TEntityData entityData);
    }
}
