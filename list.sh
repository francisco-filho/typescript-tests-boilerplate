#!/bin/bash

RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "$RED Listing directories $NC"
ls -lha

sleep 2

ls tests/*
