const customers = [
    {
        id: "1a2b3c4d",
        name: "John Doe",
        description: "John is a long-time customer who enjoys outdoor activities and is always looking for the latest in camping gear. He appreciates high-quality products and values excellent customer service. His interests include hiking, fishing, and exploring national parks across the country.",
        address: "123 Elm Street, Springfield, IL"
    },
    {
        id: "5e6f7g8h",
        name: "Jane Smith",
        description: "Jane is a busy professional with a passion for cooking and gourmet food. She often shops for kitchen gadgets and specialty ingredients. Her hobbies include trying out new recipes, hosting dinner parties, and traveling to food festivals around the world.",
        address: "456 Oak Avenue, Chicago, IL"
    },
    {
        id: "9i0j1k2l",
        name: "Alice Johnson",
        description: "Alice is an avid reader who loves collecting rare books. She frequently visits our store to browse the latest releases in fiction, as well as to find unique first editions. She also enjoys writing her own short stories in her free time.",
        address: "789 Pine Road, New York, NY"
    },
    {
        id: "3m4n5o6p",
        name: "Bob Brown",
        description: "Bob is a tech enthusiast who is always on the lookout for the newest gadgets and devices. He is particularly interested in smart home technology and is constantly upgrading his home with the latest innovations. His other interests include coding and gaming.",
        address: "321 Maple Lane, Los Angeles, CA"
    },
    {
        id: "7q8r9s0t",
        name: "Carol White",
        description: "Carol is a fitness enthusiast who loves staying active and healthy. She enjoys trying out new workout routines and is always on the hunt for high-quality fitness equipment and apparel. Her hobbies include running marathons and participating in yoga retreats.",
        address: "654 Birch Street, San Francisco, CA"
    },
    {
        id: "1u2v3w4x",
        name: "David Green",
        description: "David is an entrepreneur with a passion for business and innovation. He often shops for office supplies and business books. He enjoys networking and attending conferences to stay updated on the latest industry trends.",
        address: "987 Cedar Court, Austin, TX"
    },
    {
        id: "5y6z7a8b",
        name: "Emily Black",
        description: "Emily is a creative artist who loves painting and sculpting. She frequently shops for art supplies and is always experimenting with new materials and techniques. She also enjoys visiting art galleries and museums to find inspiration for her next project.",
        address: "123 Ash Drive, Portland, OR"
    },
    {
        id: "9c0d1e2f",
        name: "Frank Blue",
        description: "Frank is a history buff with a keen interest in historical artifacts and memorabilia. He enjoys collecting antiques and often shops for rare items to add to his collection. His other hobbies include reading historical novels and visiting historical landmarks.",
        address: "456 Elm Street, Denver, CO"
    },
    {
        id: "3g4h5i6j",
        name: "Grace Yellow",
        description: "Grace is a fashion enthusiast who is always on top of the latest trends. She loves shopping for stylish clothing and accessories, and she enjoys putting together unique outfits that reflect her personal style. Her hobbies include attending fashion shows and following fashion blogs.",
        address: "789 Oak Avenue, Miami, FL"
    },
    {
        id: "7k8l9m0n",
        name: "Henry Purple",
        description: "Henry is a music lover with a passion for vinyl records. He enjoys browsing through record stores to find classic albums and rare editions. His other interests include playing the guitar and attending live music concerts.",
        address: "321 Pine Road, Seattle, WA"
    },
    {
        id: "1p2q3r4s",
        name: "Isabella Gray",
        description: "Isabella is a travel enthusiast who loves exploring new cultures and destinations. She often shops for travel gear and accessories to make her trips more comfortable. Her favorite activities include photography, hiking, and trying local cuisines.",
        address: "654 Oak Avenue, Orlando, FL"
    },
    {
        id: "5t6u7v8w",
        name: "Jack Red",
        description: "Jack is a sports fan with a passion for soccer and basketball. He frequently shops for sports equipment and jerseys to support his favorite teams. He also enjoys playing pickup games with friends and attending live sports events whenever possible.",
        address: "123 Maple Lane, Houston, TX"
    },
    {
        id: "9x0y1z2a",
        name: "Katherine Orange",
        description: "Katherine is a home decorator who loves transforming spaces with unique and stylish decor. She often shops for furniture, lighting, and art pieces to complete her designs. Her hobbies include interior design, DIY projects, and gardening.",
        address: "456 Pine Road, Atlanta, GA"
    },
    {
        id: "3b4c5d6e",
        name: "Liam Silver",
        description: "Liam is a car enthusiast with a deep interest in classic cars and modern vehicles alike. He enjoys shopping for automotive parts and accessories to maintain his collection. His other hobbies include attending car shows and participating in track days.",
        address: "789 Cedar Court, Phoenix, AZ"
    },
    {
        id: "7f8g9h0i",
        name: "Mia Gold",
        description: "Mia is a beauty and skincare expert who loves discovering new products and treatments. She frequently shops for high-quality skincare and makeup products. Her hobbies include watching beauty tutorials, trying new looks, and sharing tips with her friends.",
        address: "321 Oak Avenue, Boston, MA"
    },
    {
        id: "1j2k3l4m",
        name: "Noah Brown",
        description: "Noah is a fitness coach who specializes in strength training and nutrition. He often shops for workout gear, supplements, and healthy foods. His interests include weightlifting, meal prepping, and helping his clients achieve their fitness goals.",
        address: "654 Birch Street, San Diego, CA"
    },
    {
        id: "5n6o7p8q",
        name: "Olivia Pink",
        description: "Olivia is a pet lover with a passion for caring for animals. She enjoys shopping for pet supplies, toys, and treats for her furry friends. Her hobbies include volunteering at animal shelters, training her pets, and attending pet adoption events.",
        address: "123 Elm Street, San Jose, CA"
    },
    {
        id: "9r0s1t2u",
        name: "Paul White",
        description: "Paul is a woodworking enthusiast who loves creating custom furniture and home decor. He often shops for high-quality tools and materials to complete his projects. His other interests include carpentry, DIY projects, and sharing his creations with others.",
        address: "456 Maple Lane, Dallas, TX"
    },
    {
        id: "3v4w5x6y",
        name: "Quinn Black",
        description: "Quinn is a tech-savvy entrepreneur who is always on the lookout for the latest gadgets and innovations. He frequently shops for smart home devices and business tools. His interests include coding, automation, and attending tech conferences.",
        address: "789 Pine Road, Charlotte, NC"
    },
    {
        id: "7z8a9b0c",
        name: "Rachel Green",
        description: "Rachel is a gardening enthusiast who loves cultivating a variety of plants and flowers in her garden. She enjoys shopping for seeds, tools, and decor to enhance her outdoor space. Her hobbies include landscaping, growing vegetables, and creating beautiful floral arrangements.",
        address: "321 Cedar Court, Las Vegas, NV"
    },
    {
        id: "1d2e3f4g",
        name: "Samuel Blue",
        description: "Samuel is a photography enthusiast with a passion for capturing stunning landscapes and portraits. He frequently shops for camera equipment and accessories to improve his craft. His hobbies include traveling to picturesque locations, experimenting with different techniques, and sharing his work on social media.",
        address: "654 Oak Avenue, Columbus, OH"
    },
    {
        id: "5h6i7j8k",
        name: "Tina Silver",
        description: "Tina is a fitness enthusiast with a passion for yoga and wellness. She enjoys shopping for comfortable workout gear and health supplements. Her hobbies include attending yoga retreats, practicing meditation, and exploring different wellness practices to maintain a balanced lifestyle.",
        address: "123 Maple Lane, Kansas City, MO"
    },
    {
        id: "9l0m1n2o",
        name: "Uma Gold",
        description: "Uma is a culinary expert who loves experimenting with new recipes and ingredients in the kitchen. She frequently shops for unique kitchen gadgets and specialty foods. Her hobbies include hosting dinner parties, attending cooking classes, and sharing her culinary creations with friends and family.",
        address: "456 Pine Road, Fort Worth, TX"
    },
    {
        id: "3p4q5r6s",
        name: "Victor Red",
        description: "Victor is a fashion-forward individual who enjoys expressing his style through unique clothing and accessories. He frequently shops for trendy outfits and statement pieces. His hobbies include following fashion blogs, attending runway shows, and curating his wardrobe to reflect his personal taste.",
        address: "789 Cedar Court, Indianapolis, IN"
    },
    {
        id: "7t8u9v0w",
        name: "Wendy Yellow",
        description: "Wendy is an eco-conscious shopper who is passionate about sustainable living. She enjoys shopping for eco-friendly products and supporting brands that prioritize sustainability. Her hobbies include recycling, gardening, and advocating for environmental causes.",
        address: "321 Oak Avenue, Nashville, TN"
    },
    {
        id: "1x2y3z4a",
        name: "Xavier Orange",
        description: "Xavier is a tech entrepreneur who loves staying ahead of the curve with the latest innovations. He frequently shops for business tools, gadgets, and software to improve his company's operations. His hobbies include coding, attending tech conferences, and mentoring young entrepreneurs.",
        address: "654 Birch Street, Memphis, TN"
    },
    {
        id: "5b6c7d8e",
        name: "Yasmin Purple",
        description: "Yasmin is an art lover who enjoys exploring various forms of artistic expression. She often shops for unique art pieces, supplies, and decor to enhance her personal collection. Her hobbies include visiting galleries, attending art festivals, and creating her own artwork.",
        address: "123 Elm Street, Louisville, KY"
    },
    {
        id: "9f0g1h2i",
        name: "Zachary White",
        description: "Zachary is a sports enthusiast with a passion for outdoor activities and adventure sports. He frequently shops for high-performance gear and equipment to support his hobbies. His interests include rock climbing, mountain biking, and participating in extreme sports competitions.",
        address: "456 Maple Lane, Baltimore, MD"
    },
    {
        id: "3j4k5l6m",
        name: "Amelia Black",
        description: "Amelia is a fitness instructor who is dedicated to helping others achieve their health and wellness goals. She often shops for workout gear, nutrition supplements, and health books. Her hobbies include leading group fitness classes, meal prepping, and promoting a healthy lifestyle.",
        address: "789 Pine Road, Milwaukee, WI"
    },
    {
        id: "7n8o9p0q",
        name: "Benjamin Green",
        description: "Benjamin is a travel blogger who enjoys exploring new destinations and sharing his experiences with others. He frequently shops for travel gear, photography equipment, and souvenirs to remember his adventures. His hobbies include writing travel blogs, photography, and trying local cuisines.",
        address: "321 Cedar Court, Albuquerque, NM"
    },
    {
        id: "1r2s3t4u",
        name: "Charlotte Red",
        description: "Charlotte is a home chef who loves experimenting with new recipes and flavors in the kitchen. She frequently shops for kitchen gadgets, cookbooks, and gourmet ingredients. Her hobbies include hosting dinner parties, trying out new cooking techniques, and sharing her culinary creations with loved ones.",
        address: "654 Oak Avenue, Tucson, AZ"
    },
];

export default customers;
