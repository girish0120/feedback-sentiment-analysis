import mysql.connector


def create_connection():
    dbConn = mysql.connector.connect(
        host="localhost",
        user="root",
        password="B4b4d00k@",
        database="backend",
    )
    return dbConn


def search_user(dbConn, userId, pwd):
    query = """SELECT * FROM  login WHERE  userId= %s AND pwd=%s """
    cursor = dbConn.cursor()
    value = (userId, pwd)
    cursor.execute(query, value)
    result = cursor.fetchone()
    cursor.close()
    return result


def close_connection(dbConn):
    dbConn.close()
