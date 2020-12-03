#!/usr/bin/python3
# panel.py written by Russell Abernethy and James Gottshall
# Prints out standard input to a seven segment display.

from luma.core.interface.serial import spi, noop
from luma.core.render import canvas
from luma.core.virtual import sevensegment
from luma.led_matrix.device import max7219
from gpiozero import LED
from time import sleep
import sys

# Constants
displen = 8

# Setup the display and LED.
serial = spi(port=0, device=0, gpio=noop())
device = max7219(serial)
seg = sevensegment(device)
rled= LED(2)

# Create a buffer for the output.
strbuf = "       "
for line in sys.stdin:
	strbuf = strbuf + line
# Strip off that end of line that Russell thinks can't be removed.
strbuf = strbuf[0:len(strbuf)-1]
strbuf += "         "

# Blink red light for message.
for i in range(0,8):
	rled.on() if i % 2 == 0 else rled.off()
	sleep(.1)
del rled

# Print out the buffer.
for i in range(0, len(strbuf) - displen):
	seg.text = strbuf[i:(i+displen)]
	sleep(.3)
