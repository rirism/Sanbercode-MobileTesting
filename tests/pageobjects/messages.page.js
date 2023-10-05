const waitHelper = require('../../helpers/waitHelper');

//////------------------------------ELEMENTS-----------------------------//////

class MessagesPage { 
    get homeButton(){ 
        return $('xpath://android.widget.FrameLayout[@content-desc="Home"]/android.view.ViewGroup/android.widget.FrameLayout')
    }
    
    get directMessageButton(){
        return $('xpath://android.widget.Button[@content-desc="No unread messages"]')
    }

    get messageFriend(){
        return $('xpath://android.widget.TextView[@content-desc="arsipnya riris"]')
    }

    get inputMessages(){
        return $('xpath://android.widget.EditText')
    }

    get sendButton() {
        return $('xpath:(//android.widget.Button)[2]');
      }

    //////------------------------------ACTION-----------------------------//////
 
    async clickHomeButton(){ 
        await waitHelper.waitAndClick(this.homeButton);
    } 

    async openMessagesPage(){
        await this.directMessageButton.click();
    }

    async clickMessageFriend(){ 
        await this.messageFriend.click();
    }

    async sendMessages(string){ 
        await this.inputMessages.click();
        await this.inputMessages.setValue(string);
        await this.sendButton.click();
    }
} 
 
module.exports = new MessagesPage()