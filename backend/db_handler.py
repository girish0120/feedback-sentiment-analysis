# sql_handler.py
import mysql.connector


def create_connection():
    dbConn = mysql.connector.connect(
        host="",
        user="",
        password="",
        database="",
    )
    return dbConn


# Deepak/Ishaan
# def search_user(dbConn, userId, pwd):
#     query = ""
#     return result


def close_connection(dbConn):
    dbConn.close()
