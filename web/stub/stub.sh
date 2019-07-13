#!/bin/bash

flag=$1

stop(){
	echo "Stopping stubs..."
	ps -ef | grep "\--stubs 8186" | grep -v grep | awk '{print $2}' | xargs kill
}

start(){
	echo "Starting stubs..."
	stubby --admin 5558 --stubs 8186 --data ./stub/endpoint.yml > stub.log &
}

restart(){
	stop
	start $1
}

case $flag in
	start) start;;
	stop) stop ;;
	restart) restart;;
	*) restart;;
esac
