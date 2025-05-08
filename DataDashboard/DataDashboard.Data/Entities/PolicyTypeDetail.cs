namespace DataDashboard.Data.Entities
{
    public class PolicyTypeDetail
    {
        public int Id { get; set; }
        public string PolicyName { get; set; }
        public string PolicyDescription { get; set; }
        public PolicyType PolicyType { get; set; }
    }
}