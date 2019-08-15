using System;
using System.Collections.Generic;
using Infrastructure.Repository;

namespace Domain.Base
{
    public class ServiceBase<IRepository, TEntityData> where IRepository : IRepositoryBase<TEntityData>
    {
        private readonly IRepository repository;
        private List<string> embed;
        private IServiceFactory serviceFactory;

        public ServiceBase(IRepository repository, IServiceFactory serviceFactory = null)
        {
            this.serviceFactory = serviceFactory;
            this.repository = repository;
            embed = new List<string>();
        }

        protected IRepository Repository => repository;
        protected IServiceFactory ServiceFactory
        {
            get
            {

                if (serviceFactory == null)
                    serviceFactory = new ServiceFactory<TEntityData>(repository.Store());

                return serviceFactory;
            }
        }

        protected List<string> Embed => embed;

        public void SetEmbed(List<string> embed)
        {
            if (embed != null)
                this.embed = embed;
        }
    }
}
