import hardhat from "hardhat";

async function main() {
    console.log("deploy start")

    const MaidverseAvatars = await hardhat.ethers.getContractFactory("MaidverseAvatars")
    const avatars = await MaidverseAvatars.deploy(
        "0x77466365e1be100f8e1ac907afe4151ea21c528e",
        750,
    )
    console.log(`MaidverseAvatars address: ${avatars.address}`)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
