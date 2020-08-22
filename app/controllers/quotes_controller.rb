class QuotesController < ApplicationController
    def index
        quotes = Quote.all
        render json: QuoteSerializer.new(quotes)
    end 

    def create
        quote = Quote.new(quote_params)
        if quote.save
            render json: QuoteSerializer.new(quote), status: :accepted
        else 
            render json: {errors: quote.errors.full_messages}
        end 
    end 

    private

    def quote_params
        params.require(:quote).permit(:content, :category_id)
    end 


end
