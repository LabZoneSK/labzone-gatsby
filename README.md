# LabZone Website 

LabZone is using code, design and almost any other IT tool to solve business challenges. Exclusively remote.

Website is built on modern Jamstack architecture:
- Gatsby framework to code, generate, and build static HTML files
- React for UI development
- Netlify for deployment and hosting website
- Prismic as headless CMS to manage site content

Website URLs:
- Production: https://www.labzone.tech
- Staging: https://staging.labzone.tech

## Setup

1.  **Clone this repo and CD into it**

    ```shell
    git clone https://github.com/LabZoneSK/labzone-gatsby.git labzone
    ```
    
2.  **Install dependencies**

    ```shell
    npm install
    ```

3.  **Install Gatsby**

    ```shell
    npm install
    ```
2.  **Clone this repo and CD into it**

    ```shell
    npm install -g gatsby-cli
    ```

3.  **Create and fill out .env***

    ```shell
    cp temp.env .evn
    ```
    *ask repo ownder for credentials and required values


## Daily development
Each development starts from **dev** branch which is default. 

1.  **Create new branch from dev branch.**

2.  **Start developing.**

    ```shell
    gatsby develop
    ```

3.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._


If you need more info on gatsby, see [README_GATSBY.md](README_GATSBY.md)

4.  **When new feature or bug development is finished, push your branch to repo.**

5.  **Create Pull request {your-branch} > dev**

6.  **Ask reviewer to code review changes. When approved, PR is merged to dev.**

Merged PRs and commits to dev branch trigger Github Action which updates gh-pages branch and deploy changes to staging environment (GH pages).

## Releases
Code is released in short sprints. Usually one week long, if not agreed other.

Merged PRs and commits to main branch automatically trigger build and deployment of the website on production (Netlify).

## Content Management

Website uses headless CMS Prismic. If you need to edit content, please contact repo owners for credentials.


<!-- AUTO-GENERATED-CONTENT:END -->
