discourse-minimal
=================

Fixes [discourse](http://discourse.org) so that it is minimal: more understandable and friendlier. The understandability of medium with the complexity of the forum. 

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


### License

Copyright (c) 2014, Karissa McKelvey All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
