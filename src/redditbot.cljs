(ns redditbot
  (:require [cljs.nodejs :as nodejs]
            ["snoostorm" :as Snoostorm]
            ["snoowrap" :as Snoowrap]
            ["dotenv" :as Dotenv]))

(nodejs/enable-util-print!)

(defn -main [& args]
(Dotenv/config)
(def client (js-obj :userAgent "reddit-bot-example-node"
                    :clientId (.-CLIENT_ID (.-env js/process))
                    :clientSecret (.-CLIENT_SECRET (.-env js/process))
                    :username (.-REDDIT_USER (.-env js/process))
                    :password (.-REDDIT_PASS (.-env js/process))))
(def comments (Snoostorm/CommentStream. client (js-obj :subreddit "AskReddit"
                                             :limit 10
                                             :pollTime 2000)))
(.on comments "item" println)
)

(set! *main-cli-fn* -main)
