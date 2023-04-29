import discord
from discord import client
import os

class MidjourneyClient(client):
        
    async def on_ready(self):
        print("Logged on as {0}!".format(self.user))
    
    async def on_message(self, message):
        print("New message received : ")
        print(f"Author : {message.author}")
        print(f"Content : {message.content}")
        print(f"======================")
        
        
        if message.author == self.user:
            return

        if message.channel.id == os.getenv("MIDJOURNEY_NEWBIES_81") and message.attachments:
            print("Attachement found")