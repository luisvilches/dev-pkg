module.exports = {
    server:{
        port: process.env.PORT || 5000
    },
    db: {
        connection: "mongodb://pkg:pkg@ds028540.mlab.com:28540/pkg"
    },
    TOKEN_SECRET: process.env.TOKEN_SECRET || "79d27Mh1swkXnqGp2GdB0Xl4zmTKox2T"
}
