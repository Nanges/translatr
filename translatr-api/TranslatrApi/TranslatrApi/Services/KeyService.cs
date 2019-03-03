using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using System.Collections.Generic;
using TranslatrApi.Models;

namespace TranslatrApi.Services
{
    public class KeyService
    {
        private readonly IMongoCollection<Key> _keys;

        public KeyService(IConfiguration config) {
            var client = new MongoClient(config.GetConnectionString("TranslatrDb"));
            var db = client.GetDatabase("translatr");
            _keys = db.GetCollection<Key>("keys");
        }

        public List<Key> Get() {
            return _keys.Find(key => true).ToList();
        }

        public List<Key> Root()
        {
            return _keys.Find(key => key.Parent == null).ToList();
        }
    }
}
