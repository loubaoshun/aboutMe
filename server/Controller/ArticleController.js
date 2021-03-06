import Article from '../model/ArticleModel'

class ArticleController {
    async getArticles(ctx){
        ctx.body = await Article.getAllArticles()
    }
    async addArticle(ctx){
        const res = await Article.addArticle()
        ctx.body = res
    }
    async getOneArticle(ctx){
        const res = await Article.getOneArticle(ctx.params.id)
        ctx.body = res
    }
    async updateArticle(ctx){
        const id = ctx.params.id
        const res = await Article.updateArticle(id,ctx.request.body)
        ctx.body = res
    }
    async deleteArticle(ctx){
        const id = ctx.params.id
        const res = await Article.deleteArticle(id)
        ctx.body = res
    }
    async publishArticle(ctx){
        const id = ctx.params.id
        const res = await Article.publishArticle(id)
        ctx.body = res
    }
   async about(ctx){
        const res = await Article.about()
        ctx.body = res
   }
   async  updataAbout(ctx){
       const content =  ctx.request.body.content
       const res = await Article.updataAbout(content)
       ctx.body = res
   }
 async addRead(ctx){
     const {name,author,score} = await ctx.request.body
     const res = await Article.addRead(name,author,score)
     ctx.body = res
    }
    async getRead(ctx){
        const res = await Article.getRead()
        ctx.body = res
    }
    async updataRead(ctx){
        const {id,name,author,score} = await ctx.request.body
        const res = await Article.updataRead(id,name,author,score)
        ctx.body = res
    }
    async delRead(ctx){
        const id = ctx.request.body.id
        // console.log(id)
        const res = await Article.delRead(id)
        ctx.body = res
    }
}
export default new ArticleController()
