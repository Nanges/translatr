using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Generic;

namespace TranslatrApi.Models
{
    public class KeyWithAncestors : Key
    {
        [BsonElement("ancestors")]
        public IEnumerable<Key> Ancestors { get; set; }
    }
}
