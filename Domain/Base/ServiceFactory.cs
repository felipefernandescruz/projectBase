using System;
using MongoDB.Driver;

namespace Domain.Base
{
    public class ServiceFactory<TEntityData> : IServiceFactory
    {
        readonly IMongoCollection<TEntityData> _store;

        public ServiceFactory(IMongoCollection<TEntityData> store)
        {
            this._store = store;
        }
    }
}
