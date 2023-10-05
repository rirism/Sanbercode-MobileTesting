const waitHelper = require('../../helpers/waitHelper');

//////------------------------------ELEMENTS-----------------------------//////

class InstagramPage { 
    get searchButton(){ 
        return $('xpath://android.widget.FrameLayout[@content-desc="Search and explore"]')
    } 

    get inputSearchBox(){
        return $('xpath://android.widget.EditText')
    }

    get searchUser(){
        return $('xpath:(//android.widget.LinearLayout)[6]')
    }

    get followAccount(){
        return $('xpath://android.widget.Button[@content-desc="Follow The Panturas"]')
    }
 
//////------------------------------ACTION-----------------------------//////

    async clickSearchButton(){ 
        await waitHelper.waitAndClick(this.searchButton);
    } 

    async fillInputSearchBox(username){ 
        await this.inputSearchBox.click();
        await this.inputSearchBox.setValue(username);
    } 

    async clickOnUser(){ 
        await this.searchUser.click();
    } 

    async clickFollowAccount(){ 
        await this.followAccount.click();
    }
} 
 
module.exports = new InstagramPage()