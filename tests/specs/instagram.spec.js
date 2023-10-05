const InstagramPage = require('../pageobjects/follow');
const MessagesPage = require('../pageobjects/messages.page');

describe('Membuat mobile automation test pada aplikasi Instagram', () => {
    
//---------Test Case 1 - Follow Account---------//

    it('Aksi Cari', async() => { 
        await InstagramPage.clickSearchButton();
    }); 

    it('Cari Akun', async () => {
        await InstagramPage.fillInputSearchBox("thepanturas");
    });

    it('Klik Akun', async() => { 
        await InstagramPage.clickOnUser();
    });

    it('Follow Profile', async() => { 
        await InstagramPage.clickFollowAccount();
    });

//---------Test Case 2 - Send Message---------//

it('Klik Tombol Home', async() => { 
        await MessagesPage.clickHomeButton();
    });

    it('Klik Tombol DM', async() => { 
        await MessagesPage.openMessagesPage();
    });
    
    it('Klik Akun Tujuan Pesan', async() => { 
        await MessagesPage.clickMessageFriend();
    });

    it('Ketik Pesan', async() => { 
        await MessagesPage.sendMessages("Hai");
    });
});