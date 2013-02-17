#
# Clean/Compile Life-cycle
#

all: clean compile


clean:
	rm -rf _site


compile:
	bundle exec jekyll --no-server --no-safe --no-auto


runserver: clean compile
	bundle exec foreman start


.PHONY: all clean compile runserver

#
# Developer Setup
#

setup:
	bundle install

.PHONY: setup
