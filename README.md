discourse-minimal
=================

Fixes discourse so that it is minimal: more understandable and friendlier. The understandability of medium with the complexity of the forum. 

### Installation

#### Copy CSS

At ```/admin/customize/css_html``` create a new customization. 

In the Stylesheet section, copy the contents of ```minimal.css```.

Save, and hit 'Enable' on the bottom right hand corner. 

#### Copy JS

At ```/admin/customize/site_text/head``` make sure you see 'HTML head'

Copy the contents of ```minimal.js```.

### Features

  * Automatically go to the *Categories* listing upon initial landing.
  * Top bar filters are too numerous. Minimal only allows *Starred,* *Top,* *Latest,* and *Categories.* *New* and *Unread* are removed. 
  * Notification icon changed from a talk bubble to a bell.
  * Private categories should have a lock icon, not a group icon. (BROKEN FOR CATEGORY DROPDOWN LIST)
  * Remove *Activity,* *Users,* and *Posts* from the topic overview.
  * Remove *Latest,* and *Topics* from the category overview.
  * Remove the category list from the hamburger menu.
  * Remove the user stats below the OP's post
  
### Why?

Essentially, discourse is too complicated and has too many features visible for most of the population to understand. We want to simplify the interface to make it easier to undersatnd for those whose primary mode of communication online is email and Facebook comments. We need the simplified interface that Medium brings with the complexity of a forum.
 
### TODO
  * Attack the posting page aggressively.
