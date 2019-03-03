using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace TranslatrApi.Models
{
    public class Key
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("_parent")]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Parent { get; set; }

        [BsonElement("name")]
        public string Name { get; set; }
    }
}
