from models import db, UserProfile, Recipe, Review
from app import app

with app.app_context():
    # Delete existing records
    Recipe.query.delete()
    UserProfile.query.delete()
    Review.query.delete()


    def seed_data():
        #sample user profiles
<<<<<<< HEAD
        user1 = UserProfile(
            name="John Doe",
            email="john@gmail.com",
            password="password123"
        )
        user2 = UserProfile(
            name="Jane Doe",
            email="jane@gmail.com",
            password="password456"
        )

        #sample recipes with image paths
        recipe1 = Recipe(
            title="Pasta Carbonara",
            instructions="Lorem ipsum dolor sit amet.",
            category="Nyarwanda",
            country="Rwanda",
            image="images/pasta_carbonara.jpg",
            author=user1
        )
        recipe2 = Recipe(
            title="Mursik",
            instructions="Consectetur adipiscing elit.",
            category="Kalenjin",
            country="Kenyan",
            image="images/chicken_curry.jpg",
            author=user2
        )
=======
        user1 = UserProfile(name="Immanuel Cheruiyot",email="immanuel@gmail.com",password="password123")
        user2 = UserProfile(name="Sarah Wanjiku",email="sarah@gmail.com",password="password234")
        user3 = UserProfile(name="Debra Cherono",email="debra@gmail.com",password="password345")
        user4 = UserProfile(name="Linda Chebet",email="linda@gmail.com",password="password456")
        user5 = UserProfile(name="Mirriam Wangui",email="mirriam@gmail.com",password="password567")

        #sample recipes with image urls
        recipe1 = Recipe(title="Pasta Carbonara",instructions="Lorem ipsum dolor sit amet.",category="Nyarwanda",
            country="Rwanda",image="https://th.bing.com/th/id/R.36cf41c01720d9bf23ddda6d5f6a53c0?rik=587VkzI1r9XRAQ&pid=ImgRaw&r=0",author=user5)
        
        recipe2 = Recipe(title="Marurano",instructions="Lorem ipsum dolor sit amet.",category="kisii",
            country="Kenya",image="images/pasta_carbonara.jpg",author=user3)
        
        recipe3 = Recipe(title="Ugali Skuma na samaki",instructions="Lorem ipsum dolor sit amet.",category="bongos",
            country="Tanzania",image="https://th.bing.com/th/id/R.4a9285fc14d21670e6cdf6b7e0c66f0c?rik=TngX0ljU6Haa3A&pid=ImgRaw&r=0",author=user2)
        
        recipe4 = Recipe(title="Mursik",instructions="Lorem ipsum dolor sit amet.",category="kalenjin",
            country="Kenya",image="https://www.businessthisday.com/wp-content/uploads/2023/06/mursik.bmp",author=user4)
        
        recipe5 = Recipe(title="fufu",instructions="Lorem ipsum dolor sit amet.",category="Igbo",
            country="Nigeria",image="https://th.bing.com/th/id/OIP.VcR7NvHSRSi6F_3zroIVhAHaE7?rs=1&pid=ImgDetMain",author=user1)
        
        recipe6 = Recipe(title="Malolo",instructions="Lorem ipsum dolor sit amet.",category="congoleese",
            country="DRC",image="https://th.bing.com/th/id/OIP.H8TqgfBzQOViN4eUEexRqwHaE8?w=1024&h=683&rs=1&pid=ImgDetMain",author=user4)
        
        recipe7 = Recipe(title="Egg Karanga",instructions="Lorem ipsum dolor sit amet.",category="Zulus",
            country="South Africa",image="https://th.bing.com/th/id/OIP.lAyUN8ICqxIIpjop2fJunwAAAA?w=474&h=474&rs=1&pid=ImgDetMain",author=user2)
        
        recipe8 = Recipe(title="Pasta Carbonara",instructions="Lorem ipsum dolor sit amet.",category="Nyarwanda",
            country="Rwanda",image="images/pasta_carbonara.jpg",author=user1)
        
        recipe9 = Recipe(title="Shika Nakamoto",instructions="Lorem ipsum dolor sit amet.",category="Angolis",
            country="Angola",image="https://zambiankitchen.com/wp-content/uploads/2023/04/Screenshot_20230212-074242-01.jpeg",author=user3)
        
        recipe10 = Recipe(title="Hot Nare",instructions="Lorem ipsum dolor sit amet.",category="Pharaos",
            country="Egypt",image="https://4.bp.blogspot.com/-Il3xkVFASLg/WDlo6VWjFUI/AAAAAAAAAHg/nMadurJbyDEqkeomT0ZCxruudYO63QczQCK4B/s1600/Sadza.jpg",author=user1)
        
        recipe11 = Recipe(title="Hohomanga",instructions="Lorem ipsum dolor sit amet.",category="waethios",
            country="Ethiopia",image="https://th.bing.com/th/id/OIP.Jfs7YroSpmTtVgbqd9_gQQHaJP?rs=1&pid=ImgDetMain",author=user2)
        
        recipe13 = Recipe(title="Omena waganda",instructions="Lorem ipsum dolor sit amet.",category="Banange",
            country="Uganda",image="https://zambiankitchen.com/wp-content/uploads/2023/04/Screenshot_20230212-074258-01.jpeg",author=user2)
        
        recipe14 = Recipe(title="Ugali matumbo",instructions="Lorem ipsum dolor sit amet.",category="Shengs",
            country="Kenya",image="https://netstorage-briefly.akamaized.net/images/61577ab74dfffd96.jpg?imwidth=900",author=user4)
        
        recipe15= Recipe(title="Ndizi madip",instructions="Lorem ipsum dolor sit amet.",category="Bongos",
            country="Tanzania",image="https://i.pinimg.com/originals/3a/16/de/3a16de7065727081eb0427340c2d750e.jpg",author=user2)
        
        recipe16 = Recipe(title="Ndizi Matoke",instructions="Lorem ipsum dolor sit amet.",category="Matoke",
            country="Kenya and Uganda",image="https://i.pinimg.com/736x/4e/32/60/4e326033ad28ed4ffc37a5529f69c700.jpg",author=user3)
        
        recipe17 = Recipe(title="Maharage Hara",instructions="Lorem ipsum dolor sit amet.",category="somalis",
            country="Somalia",image="https://th.bing.com/th/id/OIP.P50zlJRbnbg9OSiiUL_MJwHaFj?rs=1&pid=ImgDetMain",author=user5)
        
        recipe18 = Recipe(title="Idd Ul Ftr",instructions="Lorem ipsum dolor sit amet.",category="Somalis",
            country="Somalia",image="https://i.pinimg.com/originals/78/4a/2b/784a2bb48fc5451f49006f2694910242.jpg",author=user5)
        
        recipe19 = Recipe(title="Sherehe Sheria",instructions="Lorem ipsum dolor sit amet.",category="Amapianos",
            country="South Africa",image="https://th.bing.com/th/id/OIP.DTKDaLKcwGPmKTWBwmLieQHaFO?rs=1&pid=ImgDetMain",author=user3)
        
        recipe20 = Recipe(title="Githeri",instructions="Lorem ipsum dolor sit amet.",category="Ghananians",
            country="Ghana",image="https://d36tnp772eyphs.cloudfront.net/blogs/1/2019/12/Samp-with-bean.jpg",author=user1)
        
        recipe21 = Recipe(title="Muturaa",instructions="Lorem ipsum dolor sit amet.",category="street",
            country="East Africa",image="v",author=user4)
        

>>>>>>> 60cd814f60e3821763366aa212205b6d67095708

        # sample reviews
        review1 = Review(
            comments="Delicious pasta!",
            rating=5,
            reviewer=user1,
            recipe=recipe1
        )
        review2 = Review(
            comments="Great curry recipe!",
            rating=4,
            reviewer=user2,
            recipe=recipe2
        )

        # sample data to the session and commit
        db.session.add_all([user1, user2, recipe1, recipe2, review1, review2])
        db.session.commit()

        print("Database seeded successfully!")

    seed_data()