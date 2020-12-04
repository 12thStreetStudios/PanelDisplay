import socket
import sys

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
host = '192.168.0.23'
port = 1500

s.connect((host, port))
for line in sys.stdin:
    s.send(line.encode('ascii'))
s.close()