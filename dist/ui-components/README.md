# @platfrmr/ui-components

This library consist of opinionated tailwind components that can be reused in any Angular v18+ project.

## Install package

Run `npm i --save @platfrmr/ui-components@latest` to install the package.

## Make sure to add the library from node_modules to your tailwind.config.js content section

Add <code>
content: [
"./src/**/*.{html,ts}",
"./node_modules/@platfrmr/ui-components/lib/**/*.{html,js,ts}",
]
</code>
to the tailwind.config.js

## Import Module to any component you want to use it in

Add import to any module or component `import { HeroModule} from '@platfrmr/ui-components';`

## Call component using the template selector inside the component template component like the following example

Add `<uic-hero title="Your title goes here!" description="Your descriptoin goes here!" secondHeader="Second header goes here this is above the title." CTALink="/getstarted" CTAText="Get Started" CTA2Link="/signupworkshop" CTA2Text="Sign Up!"></uic-hero>`

## Test the component inside the app app by running ng serve

Run `ng serve`.

## For support don't hesitate to contact us on the following links

## Please support us by following us on the following platforms

- X [@platfrmrcarl](https://www.x.com/platfrmrcarl/)
- IG [@platfrmrcarl](https://www.instagram.com/platfrmrcarl/)
- Threads [@platfrmrcarl](https://www.threads.net/@csfinch)
- Facebook [@platfrmr](https://www.facebook.com/platfrmr)
- LinkedIn [@platfrmrcarl](https://www.linkedin.com/in/platfrmrcarl/)

## License

MIT

## We hope this helps you build UI components out quicker with Angular.

Thanks so much!
