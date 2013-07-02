using System;

namespace BedAndBroadband.Services
{
    using Simple.Web;
    using System.Collections.Generic;
    using Simple.Data;
    using Simple.Web.Behaviors;

    [UriTemplate("/hotels/recentlyrated")]
    public class GetRecentlyRatedHotels: IGet, IOutput<IEnumerable<Hotel>>
    {
        private readonly dynamic _db = Database.OpenNamedConnection("default");
        
        public Status Get()
        {
            try
            {
                Output = _db.Hotels.All().WithRatings().OrderByLastRatingDateDescending().Take(5);
            }
            catch(Exception ex)
            {
                Console.Write(ex.Message);
                throw;
            }
            
            return Status.Success.OK;
        }

        public IEnumerable<Hotel> Output { get; private set; }
    }

    [UriTemplate("/items/all")]
    public class GetAllItems : IGet, IOutput<IEnumerable<Item>>
    {
        private readonly dynamic _db = Database.OpenNamedConnection("test");


        public Status Get()
        {
            Output = _db.Items.All().WithOrderItems();

            return Status.Success.OK;
        }

        public IEnumerable<Item> Output { get; private set; }
    }

    public class Item
    {
        public int ItemId { get; set; }
        public string Name { get; set; }
        public List<OrderItem> OrderItems { get; set; } 

    }

    public class OrderItem
    {
        public int OrderItemId { get; set; }
        public int ItemId { get; set; }
    }

    public class Hotel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Rating> Ratings { get; set; } 
    }

    public class Rating
    {
        public int Id { get; set; }
        public int Quality { get; set; }
        public int DownloadMbps { get; set; }
        public int UploadMbps { get; set; }
    }
}
