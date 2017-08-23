// Data structure that will store the friends data
var friendsArray = [{
        name: 'Barry',
        photo: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Ffarm5.staticflickr.com%2F4086%2F4966335741_07a3eb8a4c_o.jpg&imgrefurl=http%3A%2F%2Fwww.flickriver.com%2Fphotos%2Fpapda78%2F4966335741%2F&docid=UBSY3bSHIMFdjM&tbnid=ajgGx-qNrygoWM%3A&vet=10ahUKEwjcpqq23-bVAhXJ8CYKHRH4Dv0QMwgtKAYwBg..i&w=320&h=240&bih=779&biw=1307&q=nerds&ved=0ahUKEwjcpqq23-bVAhXJ8CYKHRH4Dv0QMwgtKAYwBg&iact=mrc&uact=8',
        scores: [
            '1',
            '5',
            '5',
            '1',
            '5',
            '5',
            '1',
            '1',
            '1',
            '5'
        ]
    },
    {
        name: 'Clark',
        photo: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fpreviews.123rf.com%2Fimages%2Fninamalyna%2Fninamalyna1211%2Fninamalyna121100092%2F16498814-Funny-nerdy-guy-wearing-glasses-Stock-Photo-funny-ugly-man.jpg&imgrefurl=https%3A%2F%2Fwww.123rf.com%2Fstock-photo%2Fnerd.html&docid=WBOOs3DwZxnASM&tbnid=jR4-9TkVKJmjZM%3A&vet=10ahUKEwibzPbs3ubVAhXL8CYKHXxGAd0QMwiNAShcMFw..i&w=866&h=1300&bih=779&biw=1307&q=nerds&ved=0ahUKEwibzPbs3ubVAhXL8CYKHXxGAd0QMwiNAShcMFw&iact=mrc&uact=8',
        scores: [
            '2',
            '4',
            '1',
            '1',
            '1',
            '1',
            '1',
            '2',
            '1',
            '5'
        ]
    },
    {
        name: 'Cliff',
        photo: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjkvJfe5ObVAhUISSYKHWjsAwwQjRwIBw&url=http%3A%2F%2Frevengeofthenerds.wikia.com%2Fwiki%2FLewis_Skolnick&psig=AFQjCNHVjLTemf29StRhZYqsVpQZpVtu3A&ust=1503351981555068',
        scores: [
            '4',
            '3',
            '5',
            '1',
            '1',
            '5',
            '5',
            '1',
            '1',
            '1'
        ]
    },
    {
        name: 'Dwayne',
        photo: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F736x%2F53%2F9a%2F21%2F539a213b52a6b3b39692ee03182ff294--ugly-nerd-the-nerds.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fmelsundana%2Fcharacter-makeup-ugly-nerd%2F&docid=APBhFD8wi5TUQM&tbnid=PLRzKDmhJg5RMM%3A&vet=10ahUKEwjls8XE3-bVAhXFPiYKHep0BKQ4ZBAzCCkoJzAn..i&w=188&h=268&itg=1&bih=779&biw=1307&q=nerds&ved=0ahUKEwjls8XE3-bVAhXFPiYKHep0BKQ4ZBAzCCkoJzAn&iact=mrc&uact=8',
        scores: [
            '5',
            '1',
            '2',
            '1',
            '3',
            '4',
            '1',
            '3',
            '3',
            '4'
        ]
    },
    {
        name: 'Hayden',
        photo: 'http://4.bp.blogspot.com/-HTvSYzA-pO4/UgQb4Zh_u0I/AAAAAAAAEuI/XwhtogT_1tA/s1600/3+cute2.jpg',
        scores: [
            '1',
            '1',
            '5',
            '5',
            '5',
            '5',
            '5',
            '5',
            '5',
            '1'
        ]
    },
    {
        name: 'Malcom',
        photo: 'http://img.mindbodygreen.com/image/upload/c_limit,w_738,f_auto/ftr/Miss-Piggy-large-tonya-312.jpg',
        scores: [
            '1',
            '1',
            '5',
            '1',
            '3',
            '2',
            '5',
            '1',
            '1',
            '5'
        ]
    },
    {
        name: 'Rashpal',
        photo: 'https://www.google.com/imgres?imgurl=http%3A%2F%2Fmac.h-cdn.co%2Fassets%2Fcm%2F14%2F50%2F320x426%2F5487b81175adc_-_nerdy-guy-lg-63034852.jpg&imgrefurl=http%3A%2F%2Fwww.marieclaire.com%2Fsex-love%2Fadvice%2Fg1027%2Fbad-date-stories%2F&docid=vulTYeYX8ZH7DM&tbnid=9E-w4UjQETYcSM%3A&vet=10ahUKEwiOoM3U3-bVAhWISSYKHSOtDzk4yAEQMwgCKAAwAA..i&w=320&h=426&bih=779&biw=1307&q=nerds&ved=0ahUKEwiOoM3U3-bVAhWISSYKHSOtDzk4yAEQMwgCKAAwAA&iact=mrc&uact=8',
        scores: [
            '5',
            '4',
            '4',
            '2',
            '4',
            '4',
            '3',
            '2',
            '3',
            '3'
        ]
    },
    {
        name: 'Rupert',
        photo: 'https://i1.imgiz.com/data/videoshots/6829/6829475-6461.jpg',
        scores: [
            '5',
            '2',
            '3',
            '1',
            '5',
            '1',
            '3',
            '1',
            '1',
            '5'
        ]
    },
    {
        name: 'Taylor',
        photo: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwj2geeh4ObVAhUJKyYKHa3zC-IQjRwIBw&url=https%3A%2F%2Fwww.threadless.com%2Fdesigns%2Fknow_your_nerds&psig=AFQjCNFVYex82bntShIWssfuC3jCId_pRw&ust=1503350730525007',
        scores: [
            '5',
            '5',
            '5',
            '5',
            '5',
            '5',
            '5',
            '5',
            '5',
            '5'
        ]
    },
    {
        name: 'Wesley',
        photo: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiH58aG4ObVAhWKZiYKHUfIDGMQjRwIBw&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FNerd&psig=AFQjCNFVYex82bntShIWssfuC3jCId_pRw&ust=1503350730525007',
        scores: [
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1',
            '1'
        ]
    }
];

module.exports = friendsArray;