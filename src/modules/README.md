`src/modules`

This is our main folder. We should group our project by domain in modules and each module should contain everything related to itself. For instance, if we're using redux, a `modules/session` folder could include `action` and `reducers` inside.

However, each domain folder should be flexible enough to cater for whatever you need.  
**Feel free to structure it as you see fit**.  
These folder should be contained and should avoid importing from other modules (except shared)
