from dotenv import load_dotenv
load_dotenv()

import discord
import asyncio
import os

from bot.MidjourneyClient import MidjourneyClient
from discord.ext import commands



async def send_command(client, prompt:str):
    channel = client.get_channel(os.getenv("MIDJOURNEY_NEWBIES_81"))
    await channel.send(f"/imagine {prompt}")

async def main():
    intents = discord.Intents.default()
    intents.message_contents = True
    
    client = MidjourneyClient(intents=intents)
    client.run(os.getenv("DISCORD_BOT_TOKEN"))
    
    await send_command(client, "Hello world")
    
    # Wait for the client to stop running
    await client.wait_until_ready()
    
    

if __name__ == "__main__":
    print("Starting bot...")
    asyncio.run(main())