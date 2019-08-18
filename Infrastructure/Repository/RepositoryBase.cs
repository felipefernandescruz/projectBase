using System;
using System.Collections.Generic;
using Infrastructure.Base;
using MongoDB.Driver;

namespace Infrastructure.Repository
{
    public abstract class RepositoryBase<TEntityData> : IRepositoryBase<TEntityData> where TEntityData : BaseEntity
    {
        readonly IMongoCollection<TEntityData> _store;

        public RepositoryBase(string collection)
        {
            var client = new MongoClient();
            var database = client.GetDatabase("BasestoreDb");
            _store = database.GetCollection<TEntityData>(collection);
        }

        public void Add(TEntityData entityData)
        {
            _store.InsertOne(entityData);
        }

        public void DeleteByKey(string id)
        {
            _store.DeleteOne(id);
        }

        public TEntityData GetByKey(string id)
        {
            return _store.Find<TEntityData>(id).FirstOrDefault();
        }

        public IMongoCollection<TEntityData> Store()
        {
            return _store;
        }

        public List<TEntityData> ListAll()
        {
            return _store.Find<TEntityData>(item => true).ToList();
        }

        public void Update(string _id,TEntityData entityData)
        {
            _store.ReplaceOne(entity=> entity.Id ==_id,entityData);
        }

    }
}
